# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable
  include DeviseTokenAuth::Concerns::User
  has_many :items, dependent: :destroy
  has_many :events, through: :items 
  validates :first_name, :last_name, :email, :bio, :images, presence: true
end