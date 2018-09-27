module Main where

import qualified BaseChallenge as B
import qualified OptionChallengeOne as OpOne
import qualified OptionChallengeTwo as OpTwo

main :: IO ()
main = do
        -- | base challenge
        B.showResult "" ""
        B.showResult "" "s"
        B.showResult "s" ""
        B.showResult "leave" "eave"
        B.showResult "reset" "rest"
        B.showResult "dragoon" "dragon"
        B.showResult "eave" "leave"
        B.showResult "sleet" "lets"
        B.showResult "skiff" "ski"
        -- | optional challenge 1
        OpOne.showResult "wordList.txt" "dragoon"
        OpOne.showResult "wordList.txt" "boats"
        OpOne.showResult "wordList.txt" "affidavit"
        -- | optional challenge 2
        OpTwo.showResult "wordList.txt"