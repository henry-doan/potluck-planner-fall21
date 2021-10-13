class AddCreatedByToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :created_by, :integer
  end
end
