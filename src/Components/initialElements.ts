import { Node, Edge } from "reactflow";
import axios from "axios";

export const nodesData = (data: any): Node[] => {
  const arr: Node[] = [];

  arr.push({
    type: "shape",
    id: "0",
    data: {
      shape: "circle",
      height: "40",
      label: "Start",
      color: "#668de3",
      info: "Start",
    },
    position: { x: 0, y: 0 },
  });

  let index = 0;

  index++;

  data.apiComponentList.forEach(async (d: any, idx: Number) => {
    if (
      !d.ruleConfigIdentifierDefinition &&
      !d.ruleConfigExecution &&
      !d.ruleConfigIdentifier
    ) {
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
    } else if (d.ruleConfigIdentifier) {
      arr.push({
        type: "shape",
        id: index.toString(),
        data: {
          shape: "diamond",
          height: 60,
          width: 160,
          label: d.ruleConfigIdentifier.name,
          color: "#eba834",
          info: JSON.stringify(d.ruleConfigIdentifier, null, "\t").toString(),
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
    } else if (d.ruleConfigIdentifierDefinition) {
      arr.push({
        type: "shape",
        id: index.toString(),
        data: {
          shape: "diamond",
          height: 60,
          width: 160,
          label: d.ruleConfigIdentifierDefinition.name,
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
    } else if (d.ruleConfigExecution) {
      for (let i = 0; i < d.ruleConfigExecution?.length; i++) {
        const item = d.ruleConfigExecution[i];
        // console.log(
        //   item.name,
        //   `http://localhost:8080/service/rfind/${item.name}`
        // );

        // const res = axios.get(
        //   `http://localhost:8080/service/rfind/${item.name}`
        // );

        arr.push({
          type: "shape",
          id: index.toString(),
          data: {
            shape: "diamond",
            height: 60,
            width: 160,
            label: item.name,
            color: "#eba834",
            //info: res.data[0],
            info: item.name,
            // info: JSON.stringify(res.data[0], null, "\t").toString(),
          },
          position: { x: 0, y: 0 },
        });
        index++;

        // arr.push({
        //   type: "shape",
        //   id: index.toString(),
        //   data: {
        //     shape: "diamond",
        //     height: 60,
        //     width: 160,
        //     label: item.name,
        //     color: "#eba834",
        //     //info: res.data[0],
        //     // info: "lion",
        //     info: JSON.stringify(res.data[0], null, "\t").toString(),
        //   },
        //   position: { x: 0, y: 0 },
        // });

        // index++;
        // console.log("Coming here...");
      }

      arr.push({
        type: "shape",
        id: index.toString(),
        data: {
          shape: "round-rect",
          height: 60,
          label: d.name,
          color: "#34eb7a",
          // info: d.name
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

  console.log(arr);
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
    if (
      !d.ruleConfigIdentifierDefinition &&
      !d.ruleConfigExecution &&
      !d.ruleConfigIdentifier
    ) {
      arr1.push({
        id: `${index}->${index + 1}`,
        source: index.toString(),
        target: (index + 1).toString(),
        // sourceHandle: "bottom",
        // targetHandle: "top",
      });

      index++;
    } else if (d.ruleConfigIdentifierDefinition || d.ruleConfigIdentifier) {
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
    } else if (d.ruleConfigExecution) {
      d.ruleConfigExecution.map((item: any, idx: Number) => {
        console.log("here2");
        arr1.push({
          id: `${index}->${index + 1}`,
          source: index.toString(),
          target: (index + 1).toString(),
          // sourceHandle: "bottom",
          // targetHandle: "top",
          // animated: true,
        });

        index++;
      });

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
