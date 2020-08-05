package TicTacToeGUI;

import processing.core.PApplet;

public class CenterPoint {
    private PApplet p;
    public float x;
    public float y;
    private int boxSize;

    public CenterPoint(PApplet p, float x, float y, int boxSize) {
            this.p = p;
            this.boxSize = boxSize;
            this.x = x + boxSize / 2;
            this.y = y + boxSize / 2;
        }

        public float getCenterX() {
            return x;
        }

        public float getCenterY() {
            return y;
        }
}
