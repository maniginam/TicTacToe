package TicTacToeGUI;

import processing.event.MouseEvent;

public class GameMaster {
    private int playing;
    private int currentPlayer;
    private int turnCount;
    private Box[] boxes;
    private Win[] wins;
    private Integer boxNumber;
    private int playerOne = 1;
    private int playerTwo = 2;
    private Board board;
    private int[] boxesPlayed;
    private int[] boxPieces;
    private boolean won = false;

    public GameMaster(Board board) {
        this.board = board;
        boxesPlayed = new int[9];
        boxPieces = new int[9];
        wins = new Win[9];
        wins[0] = null;
        wins[1] = new Win(0, 1, 2);
        wins[2] = new Win(3, 4, 5);
        wins[3] = new Win(6, 7, 8);
        wins[4] = new Win(0, 3, 6);
        wins[5] = new Win(1, 4, 7);
        wins[6] = new Win(2, 5, 8);
        wins[7] = new Win(0, 4, 8);
        wins[8] = new Win(2, 4, 6);
    }

    public void initiateGame() {
        playing = 1;
        currentPlayer = 1;
        turnCount = 0;
        boxes = board.getBoxes();
        board.updateGameStats(playing, turnCount, currentPlayer);
    }

    public boolean getWon() {
        return won;
    }

    public void mouseClicked(MouseEvent click) {
        Box boxPlayed = getBox();
        if (boxPlayed != null) {
            if (boxPlayed.available) {
                boxNumber = boxPlayed.getBoxNumber();
                playTurn(boxPlayed);
            } else {
                boxNumber = null;
                System.out.println("Box already filled.  Please select a different box.");
            }
        }
    }

    private Box getBox() {
        Box boxPlayed = null;
        for (Box box : boxes) {
            if (box.mouseInBox()) {
                boxPlayed = box;
            }
        }
        return boxPlayed;
    }

    private void playTurn(Box boxPlayed) {
        playBoxClicked(boxPlayed);
        trackBoxes();
        if (isWin(boxNumber, currentPlayer, boxPieces)) {
            System.out.println("player " + currentPlayer + " Wins!");
            endGame();
        } else {
            turnPlayed();
        }
    }

    private int getWinningTriple() {
        int winningTriple = 0;
        for (int win = 1; win < 9; win++) {
            for (int xo = 1; xo <= 2; xo++) {
                int boxOne = wins[win].getBoxOne();
                int boxTwo = wins[win].getBoxTwo();
                int boxThree = wins[win].getBoxThree();
                int boxOnePiece = boxPieces[boxOne];
                int boxTwoPiece = boxPieces[boxTwo];
                int boxThreePiece = boxPieces[boxThree];
                if (boxOnePiece == xo && boxTwoPiece == xo && boxThreePiece == xo) {
                    winningTriple = win;
                }
            }
        }
        return winningTriple;
    }

    private void endGame() {
        won = true;
        int winningTriple = getWinningTriple();
        board.showWinningTriple(wins[winningTriple].getBoxOne(), wins[winningTriple].getBoxTwo(), wins[winningTriple].getBoxThree());
        playing = 0;
        board.updateGameStats(playing, turnCount, currentPlayer);
    }

    private void playBoxClicked(Box box) {
        box.mouseClickedInBox(currentPlayer);
    }

    public void trackBoxes() {
        boxesPlayed[turnCount] = boxNumber;
        boxPieces[boxNumber] = currentPlayer;
    }

    public static boolean isWin(Integer boxNumber, int xo, int[] boxPieces) {
        if (boxPieces[4] == xo && boxPieces[3] == xo && boxPieces[5] == xo || boxPieces[4] == xo && boxPieces[1] == xo && boxPieces[7] == xo || boxPieces[4] == xo && boxPieces[0] == xo && boxPieces[8] == xo || boxPieces[4] == xo && boxPieces[2] == xo && boxPieces[6] == xo) {
            return true;
        } else if (boxPieces[0] == xo && boxPieces[1] == xo && boxPieces[2] == xo || boxPieces[0] == xo && boxPieces[3] == xo && boxPieces[6] == xo) {
            return true;
        } else if (boxPieces[8] == xo && boxPieces[6] == xo && boxPieces[7] == xo || boxPieces[8] == xo && boxPieces[2] == xo && boxPieces[5] == xo) {
            return true;
        } else {
            return false;
        }
    }

    private void turnPlayed() {
        if (turnCount < 8) {
            turnCount++;
            swapPlayers();
            board.updateGameStats(playing, turnCount, currentPlayer);
        } else {
            System.out.println("Cat's Game");
        }
    }

    private void swapPlayers() {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo;
            System.out.println("My Turn!");
        } else {
            currentPlayer = playerOne;
            System.out.println("Your Turn!");
        }
    }

    public int getCurrentPlayer() {
        return currentPlayer;
    }

}


