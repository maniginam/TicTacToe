package TicTacToeGUI;

import processing.core.PApplet;

public class ResultField {
    private PApplet p;
    private Board board;
    private int x;
    private int y;
    private int width;
    private int height;
    private String message;

    public ResultField(PApplet p, int x, int y, Board board) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.board = board;
        width = 400;
        height = 80;
    }

    public void draw() {
        p.strokeWeight(3);
        p.stroke(0, 0, 0);
        p.fill(0, 0, 200);
        p.rect(x, y, width, height);
        p.textAlign(p.CENTER);
        p.stroke(255, 255, 255);

        p.textSize(30);
        p.fill(255, 255, 255);
        p.text(message, x + width/2, y + height/2 + 10);
    }

    public void update(String message) {
        this.message = message;
    }
}
