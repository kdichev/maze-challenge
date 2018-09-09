export const findNodePosition = (arr, character) => {
  let position = [0, 0];
  arr.some((row, x) => {
    const y = row.findIndex(node => node[`${character}`]);
    if (y !== -1) {
      position[0] = x;
      position[1] = y;
      return true;
    }
    return false;
  });

  return position;
};

// const result = findNodePosition(this.props.data, "isPony");
// const result1 = findNodePosition(this.props.data, "isDomokun");
// const result2 = findNodePosition(this.props.data, "isEndPoint");

// console.log(result, result1, result2);
