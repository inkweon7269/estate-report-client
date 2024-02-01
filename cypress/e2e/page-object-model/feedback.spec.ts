import FeedbackPage from '@/cypress/pageObjects/pages/FeedbackPage';

describe('Feedback Test using Fixtures', () => {
    before(function () {
        FeedbackPage.load();
    });

    it('should submit feedback form', () => {
        FeedbackPage.submitFeedback();
    });
});
