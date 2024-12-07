class Solution {
    public int[] sortByBits(int[] arr) {
       List<String> binaryArr = new ArrayList<>(arr.length);
        HashMap<Integer, List<Integer>> countOfOnes = new HashMap<>();
        List<Integer> retVal = new ArrayList<>(arr.length);

        for(int i = 0; i < arr.length; i++){
            binaryArr.add(Integer.toBinaryString(arr[i]));
            int count = (int)binaryArr.get(i).chars().filter(ch -> ch == '1').count();
            if (countOfOnes.containsKey(count)) {
                countOfOnes.get(count).add(arr[i]);
            } else {
                countOfOnes.put(count, new ArrayList<>(Arrays.asList(arr[i])));
            }
        }

        for (Map.Entry<Integer, List<Integer>> entry : countOfOnes.entrySet()) {
            Collections.sort(entry.getValue());
            retVal.addAll(entry.getValue());
        }


       
        return retVal.stream().mapToInt(Integer::intValue).toArray();
    }
}