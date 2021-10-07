class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :event_date
      t.text :details
      t.string :image
      t.string :event_time

      t.timestamps
    end
  end
end
