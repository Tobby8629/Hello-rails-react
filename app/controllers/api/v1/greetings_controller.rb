# frozen_string_literal: true

module Api
  module V1
    # Controller for managing greetings in the API version
    # Controller for handling API requests related to greetings in version 1 of the API.
    class GreetingsController < ApplicationController
      def index
        @greeting = Greeting.order('RANDOM()').limit(1).first
        render json: @greeting, status: :ok, message: 'greeting generated successfully'
      end
    end
  end
end
