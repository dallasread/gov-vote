import DS from 'ember-data';

var Stance = DS.Model.extend({
    title: DS.attr('string'),
    permalink: DS.attr('string'),

    overview: DS.attr('string'),
    audio: DS.attr('string', { defaultValue: '' }),
    video: DS.attr('string', { defaultValue: '' }),
    documents: DS.attr('string', { defaultValue: '' }),

    issue: DS.belongsTo('issue', { async: true })
});

// Stance.reopenClass({
//     FIXTURES: [
//         {
//             id: 1,
//             active: true,
//             title: 'Yes.',
//             audio: 'Audio.',
//             video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0V5ckcTSYu8" frameborder="0" allowfullscreen></iframe>',
//             documents: 'Documents for yes.',
//             comments: 'Comments.',
//             issue: 'niqab',
//             overview: '<p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p>'
//         },
//         {
//             id: 2,
//             active: true,
//             title: 'No.',
//             audio: 'Audio.',
//             video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0V5ckcTSYu8" frameborder="0" allowfullscreen></iframe>',
//             documents: 'Documents again for no.',
//             comments: 'Comments.',
//             issue: 'niqab',
//             overview: '<p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p>'
//         },
//         {
//             id: 3,
//             active: true,
//             title: 'As long as sufficient mental help is provided.',
//             audio: 'Audio.',
//             video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0V5ckcTSYu8" frameborder="0" allowfullscreen></iframe>',
//             documents: 'Documents for other.',
//             comments: 'Comments.',
//             issue: 'niqab',
//             overview: '<p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p><p>This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content. This is the content.</p>'
//          }
//     ]
// });

export default Stance;
