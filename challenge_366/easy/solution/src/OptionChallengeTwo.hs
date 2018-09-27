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
                        let wordList     = lines content
                            wordSet      = Set.fromList wordList
                            with5Funnels = filter (hasTotalFunnels 5 wordSet) wordList
                        putStrLn $ "Words with 5 funnels: " ++ show with5Funnels

-- | get all subwords by dropping 1 letter from the word at a time
dropOneLetter :: String -> Int -> [String]
dropOneLetter "" _ = []
dropOneLetter word index
    | length word == index = []
    | otherwise            = dropped:dropOneLetter word (index + 1)
    where dropped = let (x, y) = splitAt index word in x ++ tail y

funnels :: String -> Set.Set String -> [String]
funnels word words =
    let subWords = nub $ dropOneLetter word 0
    in filter (`Set.member` words) subWords

hasTotalFunnels :: Int -> Set.Set String -> String -> Bool
hasTotalFunnels total words word = length (funnels word words) == total