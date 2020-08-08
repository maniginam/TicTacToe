package TicTacToeGUI;

import org.junit.Test;

import static TicTacToeGUI.GameMaster.isWin;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;


public class TestGameMaster {

    @Test
    public void testIsWin() {
        assertFalse(isWin(null, 1, new int[]{0, 0, 0, 0, 0, 0, 0, 0, 0}));
        assertFalse(isWin(0, 1, new int[]{0, 0, 0, 0, 0, 0, 0, 0, 0}));
        assertFalse(isWin(0, 1, new int[]{0, 1, 0, 0, 0, 0, 0, 0, 0}));
        assertFalse(isWin(0, 2, new int[]{0, 1, 1, 0, 0, 0, 0, 0, 0}));
        assertTrue(isWin(0, 1, new int[]{0, 1, 1, 2, 2, 0, 0, 0, 0}));
        assertTrue(isWin(0, 2, new int[]{0, 2, 2, 2, 2, 0, 0, 0, 0}));
        assertTrue(isWin(0, 1, new int[]{0, 0, 1, 1, 0, 0, 1, 0, 0}));
        assertTrue(isWin(0, 1, new int[]{0, 0, 0, 0, 1, 0, 0, 0, 1}));

    }


}
