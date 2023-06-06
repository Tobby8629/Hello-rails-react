class Api::V1::GreetingsController < ApplicationController
    def index
        @greeting = Greeting.order('RANDOM()').limit(1).first
        render json: @greeting, status: :ok, message: 'greeting generated successfully'
    end
    
end