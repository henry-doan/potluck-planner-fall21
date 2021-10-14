class Item < ApplicationRecord
  belongs_to :event 
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :food_name, :complete, presence: true
end
