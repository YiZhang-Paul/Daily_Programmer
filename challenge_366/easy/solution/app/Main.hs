module Main where

import Data.List
import Data.Maybe

main :: IO ()
main = do
        showResult "" ""
        showResult "" "s"
        showResult "s" ""
        showResult "leave" "eave"
        showResult "reset" "rest"
        showResult "dragoon" "dragon"
        showResult "eave" "leave"
        showResult "sleet" "lets"
        showResult "skiff" "ski"

showResult :: String -> String -> IO ()
showResult a b = print . show $ funnel a b

funnel :: String -> String -> Bool
funnel a b =
    let isValidLength = (length a - length b) == 1
    in isValidLength && hasLettersInOrder a b

hasLettersInOrder :: String -> String -> Bool
hasLettersInOrder _ "" = True
hasLettersInOrder a (b:bs)
    | isNothing index = False
    | otherwise       = hasLettersInOrder lettersRemain bs
    where index = elemIndex b a
          sliceIndex = fromJust index + 1
          lettersRemain = drop sliceIndex a