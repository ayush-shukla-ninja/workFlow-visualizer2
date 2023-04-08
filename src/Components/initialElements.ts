import { Node, Edge } from "reactflow";

export const nodesData = (data: any): Node[] => {
  let arr: Node[] = [];

  arr.push({
    type: "shape",
    id: "0",
    data: {
      shape: "circle",
      height: "40",
      label: "Start",
      color: "#668de3",
      info: "Start"
    },
    position: { x: 0, y: 0 },
  });

  let index = 0;

  index++;

  data.apiComponentList.map((d: any, idx: Number) => {
    if (!d.ruleConfigIdentifierDefinition) {
      if (d.apiConfigDefinition.apiConfigReference.url.includes("service/")) {
        arr.push({
          type: "shape",
          id: index.toString(),
          data: {
            shape: "round-rect",
            height: 60,
            label: d.name,
            color: "#EB5406",
            info: JSON.stringify(
              d.apiConfigDefinition.apiConfigReference,
              null,
              "\t"
            ).toString(),
          },
          position: { x: 0, y: 0 },
        });

        index++;
      } else {
        arr.push({
          type: "shape",
          id: index.toString(),
          data: {
            shape: "round-rect",
            height: 60,
            label: d.name,
            info: JSON.stringify(
              d.apiConfigDefinition.apiConfigReference,
              null,
              "\t"
             ).toString(),
            // label: JSON.stringify(
            //   d.apiConfigDefinition.apiConfigReference,
            //   null,
            //   "\t"
            // ).toString(),
            color: "#34eb7a",
          },
          position: { x: 0, y: 0 },
        });

        index++;
      }
    } else if (d.ruleConfigIdentifierDefinition) {
      arr.push({
        type: "shape",
        id: index.toString(),
        data: {
          shape: "diamond",
          height: 60,
          width: 160,
          label: JSON.stringify(
            d.ruleConfigIdentifierDefinition,
            null,
            "\t"
          ).toString(),
          color: "#eba834",
          info: JSON.stringify(
            d.ruleConfigIdentifierDefinition,
            null,
            "\t"
          ).toString(),
        },
        position: { x: 0, y: 0 },
      });

      index++;

      if (d.apiConfigDefinition.apiConfigReference.url.includes("service/")) {
        arr.push({
          type: "shape",
          id: index.toString(),
          data: {
            shape: "round-rect",
            height: 60,
            label: d.name,
            color: "#EB5406",
            info: JSON.stringify(
              d.apiConfigDefinition.apiConfigReference,
              null,
              "\t"
            ).toString(),
          },
          position: { x: 0, y: 0 },
        });

        index++;
      } else {
        arr.push({
          type: "shape",
          id: index.toString(),
          data: {
            shape: "round-rect",
            height: 60,
            label: d.name,
            // label: JSON.stringify(
            //   d.apiConfigDefinition.apiConfigReference,
            //   null,
            //   "\t"
            // ).toString(),
            color: "#34eb7a",
            info: JSON.stringify(
              d.apiConfigDefinition.apiConfigReference,
              null,
              "\t"
              ).toString(),
          },
          position: { x: 0, y: 0 },
        });

        index++;
      }
    }
  });

  if (data.responseDefinition) {
    arr.push({
      type: "shape",
      id: index.toString(),
      data: {
        shape: "round-rect",
        height: 80,
        label: JSON.stringify(
          data.responseDefinition?.responseMapping,
          null,
          "\t"
        ).toString(),
        color: "#ebd934",
        info: JSON.stringify(
          data.responseDefinition?.responseMapping,
          null,
          "\t"
        ).toString(),
      },
      position: { x: 0, y: 0 },
    });

    index++;
  }
  arr.push({
    type: "shape",
    id: index.toString(),
    data: {
      shape: "circle",
      height: "40",
      label: "Stop",
      color: "#668de3",
      info: "Stop",
    },
    position: { x: 0, y: 0 },
  });

  return arr;
};

export const edgesData = (data: any): Edge[] => {
  let arr1: Edge[] = [];
  let index = 0;

  arr1.push({
    id: `${index}->${index + 1}`,
    source: index.toString(),
    target: (index + 1).toString(),
    // sourceHandle: "bottom",
    // targetHandle: "top",
  });
  index++;

  data.apiComponentList.map((d: any, idx: Number) => {
    if (!d.ruleConfigIdentifierDefinition) {
      arr1.push({
        id: `${index}->${index + 1}`,
        source: index.toString(),
        target: (index + 1).toString(),
        // sourceHandle: "bottom",
        // targetHandle: "top",
      });

      index++;
    } else if (d.ruleConfigIdentifierDefinition) {
      arr1.push({
        id: `${index}->${index + 1}`,
        source: index.toString(),
        target: (index + 1).toString(),
        // sourceHandle: "bottom",
        // targetHandle: "top",
        animated: true,
      });

      index++;

      arr1.push({
        id: `${index}->${index + 1}`,
        source: index.toString(),
        target: (index + 1).toString(),
        // sourceHandle: "bottom",
        // targetHandle: "top",
      });

      index++;
    }
  });

  if (data.responseDefinition) {
    arr1.push({
      id: `${index}->${index + 1}`,
      source: index.toString(),
      target: (index + 1).toString(),
      // sourceHandle: "bottom",
      // targetHandle: "top",
    });
    index++;
  }

  return arr1;
};

// export const nodeData = () => {
//   return {
//     nodesData: function nodesData(data: any): Node[] {
//       let arr: Node[] = [];
//       let arr1: Edge[] = [];

//       arr.push({
//         type: "shape",
//         id: "0",
//         data: {
//           shape: "circle",
//           height: "40",
//           label: "Start",
//           color: "#668de3",
//         },
//         position: { x: 0, y: 0 },
//       });

//       let index = 0;

//       index++;

//       data.apiComponentList.map((d: any, idx: Number) => {
//         if (!d.ruleConfigIdentifierDefinition) {
//           if (
//             d.apiConfigDefinition.apiConfigReference.url.includes("service/")
//           ) {
//             arr.push({
//               type: "shape",
//               id: index.toString(),
//               data: {
//                 shape: "round-rect",
//                 height: 60,
//                 label: d.name,
//                 color: "#EB5406",
//               },
//               position: { x: 0, y: 0 },
//             });

//             index++;
//           } else {
//             arr.push({
//               type: "shape",
//               id: index.toString(),
//               data: {
//                 shape: "round-rect",
//                 height: 60,
//                 label: d.name,
//                 color: "#34eb7a",
//               },
//               position: { x: 0, y: 0 },
//             });

//             index++;
//           }
//         } else if (d.ruleConfigIdentifierDefinition) {
//           arr.push({
//             type: "shape",
//             id: index.toString(),
//             data: {
//               shape: "diamond",
//               height: 60,
//               width: 160,
//               label: d.ruleConfigIdentifierDefinition.name,
//               color: "#eba834",
//             },
//             position: { x: 0, y: 0 },
//           });

//           index++;

//           if (
//             d.apiConfigDefinition.apiConfigReference.url.includes("service/")
//           ) {
//             arr.push({
//               type: "shape",
//               id: index.toString(),
//               data: {
//                 shape: "round-rect",
//                 height: 60,
//                 label: d.name,
//                 color: "#EB5406",
//               },
//               position: { x: 0, y: 0 },
//             });

//             index++;
//           } else {
//             arr.push({
//               type: "shape",
//               id: index.toString(),
//               data: {
//                 shape: "round-rect",
//                 height: 60,
//                 label: d.name,
//                 color: "#34eb7a",
//               },
//               position: { x: 0, y: 0 },
//             });

//             index++;
//           }
//         }
//       });

//       if (data.responseDefinition) {
//         arr.push({
//           type: "shape",
//           id: index.toString(),
//           data: {
//             shape: "round-rect",
//             height: 80,
//             label: JSON.stringify(
//               data.responseDefinition?.responseMapping,
//               null,
//               "\t"
//             ).toString(),
//             color: "#ebd934",
//           },
//           position: { x: 0, y: 0 },
//         });

//         index++;
//       }
//       arr.push({
//         type: "shape",
//         id: index.toString(),
//         data: {
//           shape: "circle",
//           height: "40",
//           label: "Stop",
//           color: "#668de3",
//         },
//         position: { x: 0, y: 0 },
//       });

//       return arr;
//     },

//     edgesData: function edgesData(data: any): Edge[] {
//       let arr1: Edge[] = [];
//       let index = 0;

//       arr1.push({
//         id: `${index}->${index + 1}`,
//         source: index.toString(),
//         target: (index + 1).toString(),
//         sourceHandle: "bottom",
//         targetHandle: "top",
//       });
//       index++;

//       data.apiComponentList.map((d: any, idx: Number) => {
//         if (!d.ruleConfigIdentifierDefinition) {
//           arr1.push({
//             id: `${index}->${index + 1}`,
//             source: index.toString(),
//             target: (index + 1).toString(),
//             sourceHandle: "bottom",
//             targetHandle: "top",
//           });

//           index++;
//         } else if (d.ruleConfigIdentifierDefinition) {
//           arr1.push({
//             id: `${index}->${index + 1}`,
//             source: index.toString(),
//             target: (index + 1).toString(),
//             sourceHandle: "bottom",
//             targetHandle: "top",
//             animated: true,
//           });

//           index++;

//           arr1.push({
//             id: `${index}->${index + 1}`,
//             source: index.toString(),
//             target: (index + 1).toString(),
//             sourceHandle: "bottom",
//             targetHandle: "top",
//           });

//           index++;
//         }
//       });

//       if (data.responseDefinition) {
//         arr1.push({
//           id: `${index}->${index + 1}`,
//           source: index.toString(),
//           target: (index + 1).toString(),
//           sourceHandle: "bottom",
//           targetHandle: "top",
//         });
//         index++;
//       }

//       return arr1;
//     },
//   };
// };

// // export const nodes: Node[] = [
// //     {
// //     type: 'shape',
// //     id: '0',
// //     data: { shape:'circle',height:'40', label: 'Start',color: '#668de3' },
// //     position: { x: 0, y: 0 },
// //   },
// //   {
// //     type: 'shape',
// //     id: '1',
// //     data: { shape:'round-rect',height: 60, label: 'update-loan-additional-info update-loan-additional-info update-loan-additional-info', color: '#34eb7a' },
// //     position: { x: 0, y: 0 },
// //   },
// //   {
// //     type: 'shape',
// //     id: '2',
// //     data: { shape:'round-rect',height: 60, label: 'get-all-loans', color: '#34eb7a' },
// //     position: { x: 0, y: 0 },
// //   },
// //   {
// //     type: 'shape',
// //     id: '3',
// //     data: {shape:'round-rect',height: 60, label: 'approve-loan-by-id', color: '#34eb7a' },
// //     position: { x: 0, y: 0 },
// //   },
// // //   {
// // //     type: 'group',
// // //     id: '4A',
// // //     data: {},
// // //     position: {x:0, y:0} ,
// // //     //     style: {
// // //     //   width: 340,
// // //     //   height: 220,
// // //     // },
// // //   },
// //     {
// //     type: 'shape',
// //     id: '4',
// //     data: {shape:'diamond',height: 60,width: 160, label: 'convertToApproveLoan', color: '#eba834' },
// //     position: { x: 0, y: 0 },
// //     // parentNode: '4A',
// //     // extent: 'parent',
// //   },
// //       {
// //     type: 'shape',
// //     id: '5',
// //     data: {shape:'round-rect',height: 60, label: 'approve-maker-checker', color: '#34eb7a' },
// //     position: { x: 0, y: 0 },
// //     // parentNode: '4A',
// //     // extent: 'parent',
// //   },
// //     {
// //     type: 'shape',
// //     id: '6',
// //     data: {shape:'round-rect',height: 60, label: 'GET: /api/v1/{entityType}/{id}', color: '#34eb7a' },
// //     position: { x: 0, y: 0 },
// //   },
// //     {
// //     type: 'shape',
// //     id: '7',
// //     data: {shape:'round-rect',height: 60, label: 'update-liquiloans-status', color: '#34eb7a' },
// //     position: { x: 0, y: 0 },
// //   },
// //       {
// //     type: 'shape',
// //     id: '8',
// //     data: {shape:'round-rect',height: 80, label: ' 0 $.auto-approve-liquiloans-bnpl-loan[0]', color: '#ebd934'},
// //     // 1 : $.auto-approve-liquiloans-bnpl-loan[1], 2 : $.auto-approve-liquiloans-bnpl-loan[2], 3 : $.auto-approve-liquiloans-bnpl-loan[3], 4 : $.auto-approve-liquiloans-bnpl-loan[4], 5 : $.auto-approve-liquiloans-bnpl-loan[5],',

// //     position: { x: 0, y: 0 },
// //   },
// //     {
// //     type: 'shape',
// //     id: '9',
// //     data: {shape:'circle',height:'40', label: ' Stop', color: '#668de3'  },
// //     position: { x: 0, y: 0 },
// //   },
// // ];

// // export const edges: Edge[] = [
// //     {
// //         id: '0->1',
// //         source: '0',
// //         target: '1',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top',

// //     },
// //     {
// //         id: '1->2',
// //         source: '1',
// //         target: '2',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top',
// //     },
// //     {
// //         id: '2->3',
// //         source: '2',
// //         target: '3',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top'
// //     },
// //     {
// //         id: '3->4',
// //         source: '3',
// //         target: '4',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top'
// //     },
// //     //     {
// //     //     id: '4A->4',
// //     //     source: '4A',
// //     //     target: '4',
// //     //     sourceHandle: 'bottom',
// //     //     targetHandle: 'top'
// //     // },
// //         {
// //         id: '4->5',
// //         source: '4',
// //         target: '5',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top',
// //         animated: true,
// //     },
// //           {
// //         id: '5->6',
// //         source: '5',
// //         target: '6',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top'
// //     },
// //              {
// //         id: '6->7',
// //         source: '6',
// //         target: '7',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top'
// //     },
// //                  {
// //         id: '7->8',
// //         source: '7',
// //         target: '8',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top'
// //     },
// //                      {
// //         id: '8->9',
// //         source: '8',
// //         target: '9',
// //         sourceHandle: 'bottom',
// //         targetHandle: 'top'
// //     },

// // ];
