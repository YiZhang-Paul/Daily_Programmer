module OptionChallengeTwo
( showResult
) where

import Data.List
import Data.Maybe
import qualified Data.Map as Map
import qualified Data.Set as Set
import qualified OptionChallengeOne as OpOne

showResult :: FilePath -> IO ()
showResult filePath = do
                        content <- readFile filePath
                        let allWords          = lines content
                            groups            = groupWords allWords
                            wordsWith5Funnels = filter (totalFunnels 5 groups) allWords
                        print wordsWith5Funnels

addToSet :: Map.Map Int (Set.Set String) -> String -> Map.Map Int (Set.Set String)
addToSet groups word
    | isNothing group = Map.insert key (Set.insert word Set.empty) groups
    | otherwise       = Map.insert key (Set.insert word (fromJust group)) groups
    where key   = length word
          group = Map.lookup key groups

groupWords :: [String] -> Map.Map Int (Set.Set String)
groupWords = foldl addToSet Map.empty

dropOneLetter :: String -> Int -> [String]
dropOneLetter word index
    | totalLetters == 0     = []
    | index == totalLetters = []
    | otherwise             = dropped:dropOneLetter word (index + 1)
    where totalLetters = length word
          dropped      = let (x, y) = splitAt index word in x ++ tail y

findFunnels :: String -> Map.Map Int (Set.Set String) -> [String]
findFunnels word groups
    | isNothing group = []
    | otherwise       = filter (`Set.member` fromJust group) (nub (dropOneLetter word 0))
    where group = Map.lookup (length word - 1) groups

totalFunnels :: Int -> Map.Map Int (Set.Set String) -> String -> Bool
totalFunnels total groups word = length (findFunnels word groups) == total