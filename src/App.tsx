import React, { useEffect, useState, MouseEvent, DragEvent, DragEventHandler,useRef, useCallback,  } from 'react';
import ReactFlow, {
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
  Background,
  BackgroundVariant,
  ConnectionLineType,
  ConnectionMode,
  Node,
  Edge,
  NodeTypes,
  OnNodesChange,
  applyNodeChanges,
  NodeMouseHandler,
  NodeChange,
  OnEdgesChange,
  EdgeChange,
  applyEdgeChanges,
  Controls,
  useStoreApi,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from 'reactflow';

import Sidebar from './Sidebar';
import SimpleNode from './Components/SimpleNode';
import GroupNode from './Components/GroupNode';
import CustomNode from './CustomNode';
import useAutoLayout, { Direction } from './useAutoLayout';
import * as initialElements from './Components/initialElements';
import SelectedNodesToolbar from './Components/SelectedNodesToolbar';
import { sortNodes, getId, getNodePositionInsideParent } from './Components/utils';

import ShapeNode from './Components/ShapeNode';


import 'reactflow/dist/style.css';
import styles from './styles.module.css';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  shape: ShapeNode,
  group: GroupNode,
};

const proOptions = {
  account: 'paid-pro',
  hideAttribution: true,
};

const defaultEdgeOptions = {
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed },
  pathOptions: { offset: 5 },
  style: { strokeWidth: 2 },
};


type ExampleProps = {
  direction?: Direction;
};

type NodeData = {
  label: string;
};

/**
 * This example shows how you can automatically arrange your nodes after adding child nodes to your graph.
 */
function ReactFlowPro({ direction = 'TB' }: ExampleProps) {
  // this hook handles the computation of the layout once the elements or the direction changes
  const { fitView } = useReactFlow();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useAutoLayout({ direction });
  // const [nodes, setNodes] = useState<Node<NodeData>[]>(initialElements.nodes);
  // const [edges, setEdges] = useState<Edge[]>(initialElements.edges);
  
  const [nodes, setNodes, ] = useNodesState(initialElements.nodeData.nodesData() );
  const [edges, setEdges, ] = useEdgesState(initialElements.nodeData.edgesData());
  const onConnect = useCallback((edge: Edge | Connection) => setEdges((eds) => addEdge(edge, eds)), [setEdges]);
  const { project, getIntersectingNodes } = useReactFlow();
  const store = useStoreApi();

  

  // this function adds a new node and connects it to the source node
  const createConnection = (sourceId: string) => {
    // create an incremental ID based on the number of elements already in the graph
    const targetId: string = `${nodes.length + 1}`;

    const targetNode: Node<NodeData> = {
      id: targetId,
      data: { label: `Node ${targetId}` },
      position: { x: 0, y: 0 }, // no need to pass a position as it is computed by the layout hook
      type: 'custom',
      style: { opacity: 0 },
    };

    const connectingEdge: Edge = {
      id: `${sourceId}->${targetId}`,
      source: sourceId,
      target: targetId,
      style: { opacity: 0 },
    };

    setNodes((nodes) => nodes.concat([targetNode]));
    setEdges((edges) => edges.concat([connectingEdge]));
  };

  // this function is called once the node from the sidebar is dropped onto a node in the current graph
  const onDrop: DragEventHandler = (evt: DragEvent<HTMLDivElement>) => {
    // make sure that the event target is a DOM element
    if (evt.target instanceof Element) {
      // from the target element search for the node wrapper element which has the node id as attribute
      const targetId = evt.target.closest('.react-flow__node')?.getAttribute('data-id');

      if (targetId) {
        // now we can create a connection to the drop target node
        createConnection(targetId);
      }


      //Dynamic Grouping
      if (wrapperRef.current) {
        const wrapperBounds = wrapperRef.current.getBoundingClientRect();
        const type = evt.dataTransfer.getData('application/reactflow');
        let position = project({ x: evt.clientX - wrapperBounds.x - 20, y: evt.clientY - wrapperBounds.top - 20 });
        const nodeStyle = type === 'group' ? { width: 400, height: 200 } : undefined;

        const intersections = getIntersectingNodes({
          x: position.x,
          y: position.y,
          width: 40,
          height: 40,
        }).filter((n) => n.type === 'group');
        const groupNode = intersections[0];

        const newNode: Node = {
          id: getId(),
          type,
          position,
          data: { label: `${type}` },
          style: nodeStyle,
        };

        if (groupNode) {
          // if we drop a node on a group node, we want to position the node inside the group
          newNode.position = getNodePositionInsideParent(
            {
              position,
              width: 40,
              height: 40,
            },
            groupNode
          );
          newNode.parentNode = groupNode?.id;
          newNode.extent = groupNode ? 'parent' : undefined;
        }

        // we need to make sure that the parents are sorted before the children
        // to make sure that the children are rendered on top of the parents
        const sortedNodes = store.getState().getNodes().concat(newNode).sort(sortNodes);
        setNodes(sortedNodes);
      }
    }
  };

  // this function is called when a node in the graph is clicked
  // enables a second possibility to add nodes to the canvas
  const onNodeClick: NodeMouseHandler = (_: MouseEvent, node: Node<NodeData>) => {
    // on click, we want to add create a new node connection the clicked node
    createConnection(node.id);
  };

  const onNodesChange: OnNodesChange = (changes: NodeChange[]) => {
    setNodes((nodes) => applyNodeChanges(changes, nodes));
  };

  const onEdgesChange: OnEdgesChange = (changes: EdgeChange[]) => {
    setEdges((edges) => applyEdgeChanges(changes, edges));
  };

  //every time our nodes change, we want to center the graph again
  useEffect(() => {
    fitView({ duration: 400 });
  }, [nodes, fitView]);




  //For dynamic grouping
  
  

//   const intersections = getIntersectingNodes({
//   x: position.x,
//   y: position.y,
//   width: 40,
//   height: 40,
// }).filter((n) => n.type === 'group');
// const groupNode = intersections[0];

//   const newNode: Node = {
//     id: getId(),
//     type,
//     position,
//     data: { label: `${type}` },
//     style: nodeStyle,
//   };

  

  return (
    <div className={styles.container} >
    {/* <div 
    className={styles.rfWrapper} ref={wrapperRef}
    > */}
      {/* <Sidebar /> */}
      
      <ReactFlow
        className={styles.reactFlow}
        proOptions={proOptions}
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        onDrop={onDrop}
        onNodeClick={onNodeClick}
        // newly added edges get these options automatically
        defaultEdgeOptions={defaultEdgeOptions}
        minZoom={-Infinity}
        maxZoom={Infinity}
      >
        <SelectedNodesToolbar />
        <Background color="#bbb" gap={50} variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
    // </div>
  );
}

// as we are accessing the internal React Flow state in our component, we need to wrap it with the ReactFlowProvider
const ReactFlowWrapper = (props: ExampleProps) => {
  return (
    <ReactFlowProvider>
      <ReactFlowPro {...props} />
    </ReactFlowProvider>
  );
};

export default ReactFlowWrapper;
