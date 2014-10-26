angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses=[
        {name: 'MEAN Stack for Sociopaths', featured: true, published: new Date('1/1/2014')},
        {name: 'MEAN Stack for Non-Sociopaths', featured: true, published: new Date('2/1/2014')},
        {name: 'Super Duper Expert Angular', featured: true, published: new Date('3/1/2014')},
        {name: 'Node for Node Developers', featured: true, published: new Date('4/1/2014')},
        {name: 'Slow and Steady ExpressJS', featured: true, published: new Date('5/1/2014')},
        {name: 'JavaScript for People over 40', featured: true, published: new Date('6/1/2014')},
        {name: 'Maintainable Code for Cowards', featured: true, published: new Date('7/1/2014')},
        {name: 'A Survivors Guide to QA Review', featured: true, published: new Date('8/1/2014')},
        {name: 'Telling Recruiters to Leave You Alone', featured: true, published: new Date('9/1/2014')},
        {name: "Writing Code That Doesn't Suck", featured: true, published: new Date('10/1/2014')},
        {name: 'Be a Better Jerk During Code Reviews', featured: false, published: new Date('1/15/2014')},
        {name: 'How to Deal with Narcissistic Coworkers', featured: false, published: new Date('2/15/2014')},
        {name: 'Death March Coding for Fun and Profit', featured: false, published: new Date('3/15/2014')},
        {name: 'Agile Development and Sprints that Never End', featured: false, published: new Date('4/15/2014')},
        {name: 'Make Your Stuff Pretty by Adding Charts', featured: false, published: new Date('5/15/2014')}
    ]
});