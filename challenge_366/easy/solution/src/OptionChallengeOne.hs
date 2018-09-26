module OptionChallengeOne
( showResult
) where

import qualified BaseChallenge as B

showResult :: FilePath -> String -> IO ()
showResult filePath word = do
                            content <- readFile filePath
                            let allWords   = lines content
                                validWords = filter (B.funnel word) allWords
                            print validWords