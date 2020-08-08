package TicTacToeGUI;

import processing.core.PApplet;

public class StartButton {
    private PApplet p;
    private int x;
    private int y;
    private Board board;
    private float width;
    private float height;

    public StartButton(PApplet p, int x, int y, Board board) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.board = board;
        width = 120;
        height = 60;
    }

    public void draw() {
        p.strokeWeight(3);
        p.stroke(0, 0, 0);
        p.fill(0, 0, 200);
        p.rect(x, y, width, height);
        p.textAlign(p.CENTER);
        p.stroke(0, 0, 0);

        if (mouseInButton())
            p.fill(0, 255, 0);
        else
            p.fill(255, 255, 255);

        p.textSize(30);
        p.text("Begin", x + width/2, y + height/2 + 10);
    }

    protected boolean mouseInButton() {
        return (p.mouseX > x && p.mouseX < x + width && p.mouseY > y && p.mouseY < y + height);
    }
}
