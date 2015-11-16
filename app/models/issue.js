import DS from 'ember-data';

var Issue = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    createdAt: DS.attr('date'),

    stances: DS.hasMany('stance', {async: true})
});

Issue.reopenClass({
    FIXTURES: [
        {
            id:'assisted-suicide',
            title: 'Should terminally ill patients be allowed to end their lives via assisted suicide?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'niqab',
            title: 'Should women be allowed to wear a Niqāb, or face veil, to civic ceremonies?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.',
            stances: [1, 2, 3]
        },
        {
            id:'life-sentences',
            title: 'Should prisoners serving life sentences for first degree murder be eligible for a parole hearing after 15 years?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'business-environmental-regulations',
            title: 'Should the government increase environmental regulations on businesses in Canada?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'life-sentences-2',
            title: 'Should prisoners serving life sentences for first degree murder be eligible for a parole hearing after 15 years?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'renewable-energy-subsidy',
            title: 'Should the federal government subsidize the production and consumption of renewable energy sources?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'privatize-transcanada',
            title: 'Should the government allow TransCanada to expropriate private property for the construction of the Keystone pipeline?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'welfare-drugs',
            title: 'Should welfare recipients be tested for drugs?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id:'taxed-pensions',
            title: 'Should the pensions of retired workers be taxed?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        },
        {
            id: 'corporate-tax-rate',
            title: 'Should Canada raise or lower the tax rate for corporations?',
            description: 'The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens. The former head of Canada\'s answer to the NSA doesn\'t have a very high opinion of his fellow citizens.'
        }
    ]
});

export default Issue;
