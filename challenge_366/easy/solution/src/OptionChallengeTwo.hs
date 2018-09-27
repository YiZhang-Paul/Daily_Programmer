module OptionChallengeTwo
( showResult
) where

import Data.Maybe
import qualified Data.Map as Map
import qualified OptionChallengeOne as OpOne

showResult :: FilePath -> IO ()
showResult filePath = do
                        content <- readFile filePath
                        let allWords          = lines content
                            groups            = groupWords allWords
                            wordsWith5Funnels = filter (totalFunnels 5 groups) allWords
                        print wordsWith5Funnels

addToGroup :: Map.Map Int [String] -> String -> Map.Map Int [String]
addToGroup wordMap word
    | isNothing group = Map.insert key [word] wordMap
    | otherwise       = Map.insert key (word:fromJust group) wordMap
    where key   = length word
          group = Map.lookup key wordMap

groupWords :: [String] -> Map.Map Int [String]
groupWords = foldl addToGroup Map.empty

findFunnels :: String -> Map.Map Int [String] -> [String]
findFunnels word wordMap
    | isNothing group = []
    | otherwise       = OpOne.funnels word (fromJust group)
    where group = Map.lookup (length word - 1) wordMap

totalFunnels :: Int -> Map.Map Int [String] -> String -> Bool
totalFunnels total wordMap word = length (findFunnels word wordMap) == total