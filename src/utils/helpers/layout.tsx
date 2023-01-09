import { useResizable } from "react-resizable-layout";

export const {
    isDragging: isBottomDragging,
    position: bottomH,
    splitterProps: bottomDragBarProps
} = useResizable({
    axis: "y",
    initial: 150,
    min: 50,
    reverse: true
});

export const {
    isDragging: isLeftDragging,
    position: LeftW,
    splitterProps: leftDragBarProps
} = useResizable({
    axis: "x",
    initial: 250,
    min: 50
});

export const {
    isDragging: isRightDragging,
    position: rightW,
    splitterProps: rightDragBarProps
} = useResizable({
    axis: "x",
    initial: 200,
    min: 50,
    reverse: true
});