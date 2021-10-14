class Event < ApplicationRecord
  has_many :items, dependent: :destroy
  has_many :users, through: :items

  validates :title, :event_date, :details, :image, :event_time, presence: true

end
