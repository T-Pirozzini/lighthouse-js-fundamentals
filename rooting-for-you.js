const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'


function judgeVegetable(vegetables, metric){
  let metricScore = 0;
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[metricScore][metric] < vegetables[i][metric]){
      metricScore = i;
    }
  }
  console.log(vegetables[metricScore].submitter);  
  return vegetables[metricScore].submitter;  
}

judgeVegetable(vegetables, metric)