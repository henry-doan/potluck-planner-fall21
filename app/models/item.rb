class Item < ApplicationRecord
  belongs_to :event 
  belongs_to :user
  has_many :comments, dependent: :destroy
  # validates :food_name, :complete, presence: true
  def self.events
    #     SELECT i.food_name AS food_name, i.event_id, i.user_id, u.name, e.title
    # From users AS u
    # INNER JOIN items as i
    # ON i.user_id = u.id
    # INNER JOIN events as e
    # ON e.id = u.id;
        select("items.food_name, items.event_id, items.user_id, users.name, events.title")
        .joins("inner join users on users.id = items.user_id")
        .joins("inner join events on events.id = items.event_id")
      end
end
