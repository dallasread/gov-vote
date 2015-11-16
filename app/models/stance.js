import DS from 'ember-data';

var Stance = DS.Model.extend({
    title: DS.attr('string'),

    wiki: DS.attr('string'),
    audio: DS.attr('string'),
    video: DS.attr('string'),
    documents: DS.attr('string'),
    comments: DS.attr('string'),

    createdAt: DS.attr('date'),

    issue: DS.belongsTo('issue', { async: false })
});

Stance.reopenClass({
    FIXTURES: [
        {
            id: 1,
            active: true,
            title: 'Yes.',
            audio: 'Audio.',
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0V5ckcTSYu8" frameborder="0" allowfullscreen></iframe>',
            documents: 'Documents.',
            comments: 'Comments.',
            issue: 'niqab',
            wiki: '<p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p>'
        },
        {
            id: 2,
            active: true,
            title: 'No.',
            audio: 'Audio.',
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0V5ckcTSYu8" frameborder="0" allowfullscreen></iframe>',
            documents: 'Documents.',
            comments: 'Comments.',
            issue: 'niqab',
            wiki: '<p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p>'
        },
        {
            id: 3,
            active: true,
            title: 'As long as sufficient mental help is provided.',
            audio: 'Audio.',
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0V5ckcTSYu8" frameborder="0" allowfullscreen></iframe>',
            documents: 'Documents.',
            comments: 'Comments.',
            issue: 'niqab',
            wiki: '<p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p>'
         }
    ]
});

export default Stance;
