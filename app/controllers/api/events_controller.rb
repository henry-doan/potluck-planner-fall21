class Api::EventsController < ApplicationController

  def index
    # current_user.events?????
    render json: Event.all
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render json: { errors: @event.errors }, status: :unprocessable_entity
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render json: @event
    else 
      render json: { errors:@event.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Event.find(params[:id]).destroy
    render json: { message: 'Event Deleted' }
  end

  # MIGHT NEED TO USE THIS FOR A CUSTOM ROUTE LATER
  # def eventUsers
  #   @event = Event.find(params[:id])
  #   render json: @event.users
  # end

  private
    def event_params
      params.require(:event).permit(:title, :event_date, :details, :image, :event_time)
    end

end
