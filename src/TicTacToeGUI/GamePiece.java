package TicTacToeGUI;

import processing.core.PApplet;

public class GamePiece {
    private final int currentPlayer;
    private PApplet p;
    private float xPosition;
    private float yPosition;
    private int r;
    private int g;
    private int b;

    public GamePiece(PApplet p, float xPosition, float yPosition, int currentPlayer) {
        this.p = p;
        this.currentPlayer = currentPlayer;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

        public void draw(int r, int g, int b) {
            this.r = r;
            this.g = g;
            this.b = b;
            if (currentPlayer == 1)
                drawX(r, g, b);
            else    {
                drawO(r, g, b);
            }
        }
            private void drawX(int r, int g, int b) {
                this.r = r;
                this.g = g;
                this.b = b;
                p.strokeWeight(20);
                p.stroke(r, g, b);
                p.line(xPosition - 50, yPosition - 50, xPosition + 50, yPosition + 50);
                p.line(xPosition - 50, yPosition + 50, xPosition + 50, yPosition - 50);
                }

            private void drawO(int r, int g, int b) {
                this.r = r;
                this.g = g;
                this.b = b;
                p.strokeWeight(15);
                p.stroke(r, g, b);
                p.noFill();
                p.ellipse(xPosition, yPosition, 126, 126);
            }

    public void update(float xPosition, float yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;

    }

}
