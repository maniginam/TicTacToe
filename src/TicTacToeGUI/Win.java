package TicTacToeGUI;

public class Win<boxOne, boxTwo, boxThree> {

    private final int boxOne;
    private final int boxTwo;
    private final int boxThree;

    public Win(int boxOne, int boxTwo, int boxThree) {
        this.boxOne = boxOne;
        this.boxTwo = boxTwo;
        this.boxThree = boxThree;
    }

    public int getBoxOne() {
        return boxOne;
    }

    public int getBoxTwo() {
        return boxTwo;
    }

    public int getBoxThree() {
        return boxThree;
    }

}
