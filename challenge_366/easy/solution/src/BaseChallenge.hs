module BaseChallenge
( showResult
, funnel
) where

import Data.List
import Data.Maybe

showResult :: String -> String -> IO ()
showResult wordA wordB =
    let input  = "funnel(\"" ++ wordA ++ "\", \"" ++ wordB ++"\") => "
        output = show (funnel wordA wordB)
    in putStrLn $ input ++ output

funnel :: String -> String -> Bool
funnel wordA wordB =
    let isValidLength = (length wordA - length wordB) == 1
    in isValidLength && hasLettersInOrder wordA wordB

-- | check if all second word's letters are in the first word in same order
hasLettersInOrder :: String -> String -> Bool
hasLettersInOrder _ "" = True
hasLettersInOrder aLetters (bLetter:bLetters)
    | length aLetters < length bLetters + 1 = False
    | isNothing index                       = False
    | otherwise = hasLettersInOrder otherLetters bLetters
    where index         = elemIndex bLetter aLetters
          sliceIndex    = fromJust index + 1
          otherLetters  = drop sliceIndex aLetters