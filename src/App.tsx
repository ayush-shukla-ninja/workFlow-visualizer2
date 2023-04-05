// import React, { useEffect, useState, MouseEvent, DragEvent, DragEventHandler,useRef, useCallback, Fragment,  } from 'react';
// import ReactFlow, {
//   MarkerType,
//   ReactFlowProvider,
//   useReactFlow,
//   Background,
//   BackgroundVariant,
//   ConnectionLineType,
//   ConnectionMode,
//   Node,
//   Edge,
//   NodeTypes,
//   OnNodesChange,
//   applyNodeChanges,
//   NodeMouseHandler,
//   NodeChange,
//   OnEdgesChange,
//   EdgeChange,
//   applyEdgeChanges,
//   Controls,
//   useStoreApi,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   Connection,
// } from 'reactflow';

// import CustomNode from './CustomNode';
// import useAutoLayout, { Direction } from './useAutoLayout';
// import * as initialElements from './Components/initialElements';
// import SelectedNodesToolbar from './Components/SelectedNodesToolbar';
// import { sortNodes, getId, getNodePositionInsideParent } from './Components/utils';

// import ShapeNode from './Components/ShapeNode';

// import 'reactflow/dist/style.css';
// import styles from './styles.module.css';

// const nodeTypes: NodeTypes = {
//   custom: CustomNode,
//   shape: ShapeNode,

// };

// const proOptions = {
//   account: 'paid-pro',
//   hideAttribution: true,
// };

// const defaultEdgeOptions = {
//   type: 'smoothstep',
//   markerEnd: { type: MarkerType.ArrowClosed },
//   pathOptions: { offset: 5 },
//   style: { strokeWidth: 2 },
// };

// type ExampleProps = {
//   direction?: Direction;
// };

// type NodeData = {
//   label: string;
// };

// function ReactFlowPro({ direction = 'TB' }: ExampleProps) {
//   // this hook handles the computation of the layout once the elements or the direction changes
//   const { fitView } = useReactFlow();

//   useAutoLayout({ direction });
//   // const [nodes, setNodes] = useState<Node<NodeData>[]>(initialElements.nodes);
//   // const [edges, setEdges] = useState<Edge[]>(initialElements.edges);

//   const [nodes, setNodes, ] = useNodesState(initialElements.nodeData.nodesData() );
//   const [edges, setEdges, ] = useEdgesState(initialElements.nodeData.edgesData());

//   const onNodesChange: OnNodesChange = (changes: NodeChange[]) => {
//     setNodes((nodes) => applyNodeChanges(changes, nodes));
//   };

//   const onEdgesChange: OnEdgesChange = (changes: EdgeChange[]) => {
//     setEdges((edges) => applyEdgeChanges(changes, edges));
//   };

//   //every time our nodes change, we want to center the graph again
//   useEffect(() => {
//     fitView({ duration: 400 });
//   }, [nodes, fitView]);

//   return (
//     <div className={styles.container} >
//       <ReactFlow
//         className={styles.reactFlow}
//         proOptions={proOptions}
//         nodeTypes={nodeTypes}
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         fitView
//         // onDrop={onDrop}
//         // onNodeClick={onNodeClick}
//         // newly added edges get these options automatically
//         defaultEdgeOptions={defaultEdgeOptions}
//         minZoom={-Infinity}
//         maxZoom={Infinity}
//       >
//         <SelectedNodesToolbar />
//         <Background color="#bbb" gap={50} variant={BackgroundVariant.Dots} />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }

// // as we are accessing the internal React Flow state in our component, we need to wrap it with the ReactFlowProvider
// const ReactFlowWrapper = (props: ExampleProps) => {
//   return (
//     <ReactFlowProvider>
//       <ReactFlowPro {...props} />
//     </ReactFlowProvider>
//   );
// };

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import VisualizeData from "./Components/VisualizeData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/visualize" element={<VisualizeData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
