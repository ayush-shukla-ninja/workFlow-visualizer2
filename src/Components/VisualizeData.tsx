import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { edgesData, nodesData } from "./initialElements";

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
} from "reactflow";

import CustomNode from "../CustomNode";
import { useAutoLayout, Direction } from "../useAutoLayout";
import SelectedNodesToolbar from "./SelectedNodesToolbar";
// import { sortNodes, getId, getNodePositionInsideParent } from "./utils";

import ShapeNode from "./ShapeNode";

import "reactflow/dist/style.css";
import styles from "../styles.module.css";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  shape: ShapeNode,
};

const proOptions = {
  account: "paid-pro",
  hideAttribution: true,
};

const defaultEdgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed },
  pathOptions: { offset: 5 },
  style: { strokeWidth: 2 },
};

type ExampleProps = {
  direction?: Direction;
  initialElements?: any;
};

type NodeData = {
  label: string;
};

function ReactFlowPro({ direction = "TB", initialElements }: ExampleProps) {
  // this hook handles the computation of the layout once the elements or the direction changes
  const { fitView } = useReactFlow();

  // useAutoLayout({ direction });
  // // const [nodes, setNodes] = useState<Node<NodeData>[]>(initialElements.nodes);
  // // const [edges, setEdges] = useState<Edge[]>(initialElements.edges);

  // const [totalNodes, setTotalNodes] = useState<Node[]>([]);
  // const [totalEdges, setTotalEdges] = useState<Edge[]>([]);



  // console.log(totalNodes, "total nodes goes here....");

  // const [nodes, setNodes] = useNodesState(totalNodes);
  // const [edges, setEdges] = useEdgesState(totalEdges);

  //   useEffect(() => {
  //     const a = nodesData(initialElements);
  //     const b = edgesData(initialElements);
  //     setNodes(a);
  //     setEdges(b);
  //   }, []);


    useAutoLayout({ direction });
    // const [nodes, setNodes] = useState<Node<NodeData>[]>(initialElements.nodes);
    // const [edges, setEdges] = useState<Edge[]>(initialElements.edges);

    const [nodes, setNodes] = useNodesState(nodesData(initialElements));
    const [edges, setEdges] = useEdgesState(edgesData(initialElements));

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

  return (
    <div className={styles.container}>
      <ReactFlow
        className={styles.reactFlow}
        proOptions={proOptions}
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        // onDrop={onDrop}
        // onNodeClick={onNodeClick}
        // newly added edges get these options automatically
        defaultEdgeOptions={defaultEdgeOptions}
        minZoom={-Infinity}
        maxZoom={Infinity}
      >
        <SelectedNodesToolbar />
        {/* <Background color="#bbb" gap={50} variant={BackgroundVariant.Dots} /> */}
        <Controls />
      </ReactFlow>
    </div>
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

const VisualizeData = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [initialElements, setInitialElements] = useState<any>(null);

  useEffect(() => {
    if (location?.state) {
      const uploadedData = JSON.parse(location.state);
      setInitialElements(uploadedData);
    } else {
      navigate("/");
    }
  }, []);

  // console.log(initialElements && nodesData(initialElements));
  return (
    <>
      {initialElements && (
        <ReactFlowWrapper initialElements={initialElements} />
      )}
    </>
  );
};

export default VisualizeData;
