module OptionChallengeOne
( showResult
, funnels
) where

import qualified BaseChallenge as B

showResult :: FilePath -> String -> IO ()
showResult filePath word = do
                            content <- readFile filePath
                            let allWords = lines content
                                input    = "funnels(\"" ++ word ++ "\") => "
                                output   = funnels word allWords
                            putStrLn $ input ++ show output

funnels :: String -> [String] -> [String]
funnels word = filter (B.funnel word)