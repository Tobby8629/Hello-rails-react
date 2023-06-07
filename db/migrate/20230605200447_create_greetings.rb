# frozen_string_literal: true

# This migration creates the greetings table.
class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :title
      t.timestamps
    end
  end
end
