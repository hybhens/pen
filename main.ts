namespace pen {
    let penIsDown: boolean = false; // Internal state variable to keep track of whether the pen is down
    let x: number = 80; // Initial x-coordinate
    let y: number = 60; // Initial y-coordinate
    let color: number = 1; // Initial color

    // Function to put the pen down
    export function penDown() {
        penIsDown = true;
    }

    // Function to lift the pen up
    export function penUp() {
        penIsDown = false;
    }

    // Function to set the pen color
    export function setColor(c: number) {
        color = c;
    }

    // Function to move the pen
    export function move(dx: number, dy: number) {
        if (penIsDown) {
            // If the pen is down, draw a line from the current position to the new position
            screen.drawLine(x, y, x + dx, y + dy, color);
        }
        // Update the current position
        x += dx;
        y += dy;
    }
}
