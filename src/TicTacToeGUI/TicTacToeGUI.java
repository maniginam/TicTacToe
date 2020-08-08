package TicTacToeGUI;

import processing.core.PApplet;
import processing.event.MouseEvent;

public class TicTacToeGUI extends PApplet {
    private GameMaster gameMaster;
    private Board board;
    private StartButton startButton;
    private ResultField resultField;

    private enum GameState {WAITING, PLAYING, OVER};
    private GameState state = GameState.WAITING;
    private enum GameEvent {GAME_STARTED, WON};

    public void settings() {
        size(700, 800);
    }

    @Override
    public void mouseClicked(MouseEvent click) {
        super.mouseClicked();
//        don't forget to come back and fix clicking
        if (state == GameState.WAITING) {
            if (startButton.mouseInButton()) {
                event(GameEvent.GAME_STARTED);
                gameMaster.initiateGame();
                System.out.println("It's Your Turn");
            } else {
                System.out.println("click BEGIN to start the game");
            }
        } else if (state == GameState.PLAYING) {
            if (board.mouseOnBoard()) {
                gameMaster.mouseClicked(click);
                if (gameMaster.getWon()) {
                    event(GameEvent.WON);
                }
            } else {
                System.out.println("Click on the board to make a move");
            }
        } else {
            System.out.println("Game Over");
        }
    }

    public void setup() {
        super.setup();
        frameRate(200);
        board = new Board(this, 600, 600);
        startButton = new StartButton(this, 20, 720, board);
        resultField = new ResultField(this, 200, 710, board);
        gameMaster = new GameMaster(board);
    }

    public void draw() {
        update();
        background(255, 255, 255);
        board.draw();
        startButton.draw();
        resultField.draw();
    }

    public void update() {
        String message = null;
        board.update();

        int player = 0;
        if (state == GameState.WAITING) {
            message = "Click BEGIN to Start Game";
        } else if (state == GameState.PLAYING) {
            player = gameMaster.getCurrentPlayer();
            if (player == 1)
                message = "Your Turn";
            else message = "My Turn";
        } else {
            player = gameMaster.getCurrentPlayer();
            if (player == 1)
                message = "Game Over - " + "You Won!";
            else message = "Game Over - " + "I Won!";
        }
        resultField.update(message);
    }

    public void event(GameEvent event) {
        switch (state) {
            case WAITING:
                switch (event) {
                    case GAME_STARTED:
                        state = GameState.PLAYING;
                        break;
                    case WON:
                        System.out.println("game hasn't started yet...");
                        break;
                }
                break;
            case PLAYING:
                switch (event) {
                    case GAME_STARTED:
                        System.out.println("Game already in progress");
                        break;
                    case WON:
                        state = GameState.OVER;
                        break;
                }
                break;
            case OVER:
                switch (event) {
                    case GAME_STARTED:
                        System.out.println("Game Over");
                        break;
                    case WON:
                        System.out.println("game already over...");
                        break;
                }
        }
    }

    public static void main(String[] args) {
        PApplet.main("TicTacToeGUI.TicTacToeGUI");
    }

}
