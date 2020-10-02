(ns games.saved-games
  (:import (java.text SimpleDateFormat)
           (java.util Date)))

(defn save-game [game]
  (let [date (.format (SimpleDateFormat. "yyyyMMdd") (new Date))
        time (.getHours (Date.))
        game-cnt (:game-count game)
        recent-file (str "/Users/maniginam/TicTacToe/saved-games/recent-game.txt")
        file (str "/Users/maniginam/TicTacToe/saved-games/game-" date "-" time "-" (:game-count game)".txt")]
    (spit recent-file (str game))
    (spit file (str game))
    file))

(defn pull-game [file]
  (read-string (slurp file)))





