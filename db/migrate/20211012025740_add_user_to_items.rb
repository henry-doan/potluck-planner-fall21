class AddUserToItems < ActiveRecord::Migration[6.1]
  def change
    add_reference :items, :user, foreign_key: true
  end
end
