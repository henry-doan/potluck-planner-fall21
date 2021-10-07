class Item < ApplicationRecord
  belongs_to :event 
  has_many :comments, dependent: :destroy
  validates :food_name, :complete
end
