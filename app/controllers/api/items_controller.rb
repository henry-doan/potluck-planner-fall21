class Api::ItemsController < ApplicationController
  before_action :set_event, except: [:grabAssignedItems]
	
	def index
		render json: @current_user.items
	end

	def grabAssignedItems
    render json: Item.events
  end


	def show
		@item = @current_user.items.find(params[:id])
		render json: @item
	end

	def create
		@item = @current_user.items.new(item_params)
		if @item.save
			render json: @item
		else
			render json: { errors: @item.errors }, status: :unprocessable_entity
		end
	end

	def update
		@item = @current_user.items.find(params[:id])
		if @item.update(item_params)
			render json: @item
		else
			render json: { errors: @item.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		@item = @current_user.items.find(params[:id])
    @item.destroy
		render json: { message: 'Item Deleted'}
	end

  def findItem
    @item = Item.where(["user_id = ? AND event_id = ?", params[:user_id], params[:event_id] ])
    render json: @item
  end

	def eventItems
		render json: @event.items
	end

	private 
		def item_params
		params.require(:item).permit(:food_name, :complete, :event_id, :user_id)
	end

	def set_event
		@event = Event.find(params[:event_id])
	end

end
