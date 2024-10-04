class Solution {
    public String largestGoodInteger(String num) {
        List<Integer> allTriplets = new ArrayList<>();

        for (int i = 2; i < num.length(); i++) {
            for (int j = i - 1; j < i; j++) {
                for (int k = j - 1; k < j; k++) {
                    if (num.charAt(i) == num.charAt(j) && num.charAt(j) == num.charAt(k)) {
                        Integer n = Integer
                                .parseInt(Character.toString(num.charAt(k)) + Character.toString(num.charAt(j))
                                        + Character.toString(num.charAt(i)));
                        allTriplets.add(n);
                    }
                }
            }
        }
        // arrayList.stream().max(Integer::compareTo).get()
        // Integer max = allTriplets.stream().max(Integer::compareTo).get();
        // for(Integer i : allTriplets){
        // System.out.println(i);
        // }
        if (allTriplets.size() > 0) {
            Integer max = Collections.max(allTriplets);
            // System.out.println(allTriplets.size());
            // System.out.println(max);
            if (max > 0) {
                return Integer.toString(max);
            } else {
                return "000";
            }
        } else {
            return "";
        }
    }
}