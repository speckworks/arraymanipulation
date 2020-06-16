function arrayManipulation(n, queries) {
let diffs = [];

        queries.forEach((value, index) => {

                const range_start = value[0];
                const range_end = value[1];
                const addend = value[2];

                if (!diffs[range_start]) {
                        diffs[range_start] = addend;
                } else {
                        diffs[range_start] += addend; 
                }

                if (!diffs[range_end + 1]) {
                        diffs[range_end + 1] = 0 - addend;
                } else {
                        diffs[range_end + 1] -= addend;
                }
        });

        return diffs.reduce((acc, cur) => {
                return {
                        running_total: acc.running_total + cur,
                        max: Math.max(acc.max, acc.running_total + cur)
                };
        }, {running_total: 0, max: 0}).max;
}

