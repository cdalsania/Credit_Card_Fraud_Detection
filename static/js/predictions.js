var model = ['SMOTE-RandomForest',
    'NeuralNetwork',
    'SVM',
    'RandomForest',
    'DecisionTree',
    'AdaBoost',
    'DeepNeuralNetwork',
    'GradientBoost',
    'MultinomialNaiveBayes',
    'LogisticRegression'
];
var precision = ['0.93129771',
    '0.762295',
    '0.764705882',
    '0.927083333',
    '0.881188119',
    '0.862745098',
    '0.851485',
    '0.686440678',
    '0.733944954',
    '0.8375'
];
precision = precision.sort(d3.descending);

var precisionTrace = {
    x: model,
    y: precision,
    name: 'Precision Scores',
    type: 'bar'
};

var data = [precisionTrace];

var layout = {
    barmode: 'group',
    title: 'Precision Scores of Predictive Models'
};

Plotly.newPlot('summaryPlot', data, layout);