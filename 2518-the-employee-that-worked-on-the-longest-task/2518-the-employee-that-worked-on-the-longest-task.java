class Solution {
    public int hardestWorker(int n, int[][] logs) {
        // Initialize a list to record the unit times each employee worked upon called
        // timeRecord
        List<Integer> timeRecord = new ArrayList<>();

        timeRecord.add(logs[0][1]);

        // Iterate through the array logs starting from 1 index
        for (int i = 1; i < logs.length; i++) {
            // Find the difference between the unit times of i index and i-1 index and add
            // it to the timeRecord
            timeRecord.add(logs[i][1] - logs[i - 1][1]);
        }

        // Find the Maximum of the time Record using Collections.max
        int maximum = Collections.max(timeRecord);

        int countOfMaximum = (int) timeRecord.stream().filter(x -> x == maximum).count();

        if (countOfMaximum == 1) {

            // Find the index of the Maximum and assign it to a variable ind
            int ind = timeRecord.indexOf(maximum);

            // return the logs[index][0]
            return logs[ind][0];
        } else {

            List<Integer> employeesWithMax = new ArrayList<>();

            for (int i = 0; i < timeRecord.size(); i++) {
                if (timeRecord.get(i) == maximum) {
                    employeesWithMax.add(logs[i][0]);
                }
            }

            return Collections.min(employeesWithMax);
        }

    }
}