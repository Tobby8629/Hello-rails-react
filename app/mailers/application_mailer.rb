# frozen_string_literal: true

# Base mailer class for sending emails.
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
