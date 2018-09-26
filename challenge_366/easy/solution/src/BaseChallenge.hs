module BaseChallenge
( showResult
, funnel
) where

import Data.List
import Data.Maybe

showResult :: String -> String -> IO ()
showResult wordA wordB = print . show $ funnel wordA wordB

funnel :: String -> String -> Bool
funnel wordA wordB =
    let isValidLength = (length wordA - length wordB) == 1
    in isValidLength && hasLettersInOrder wordA wordB

hasLettersInOrder :: String -> String -> Bool
hasLettersInOrder _ "" = True
hasLettersInOrder aLetters (bLetter:bLetters)
    | isNothing index = False
    | otherwise       = hasLettersInOrder lettersRemain bLetters
    where index         = elemIndex bLetter aLetters
          sliceIndex    = fromJust index + 1
          lettersRemain = drop sliceIndex aLetters