class Api::CommentsController < ApplicationController
  before_action :set_item

  def index
    render json: @item.comments
  end

  def show 
    comment = @item.comments.find(params[:id])
  end

  def create
    @comment = @item.comments.new(comment_params)
    if @comment.save 
      render json: @comment
    else
      render json: { error: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update 
    @comment = @item.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { error: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @item.comments.find(params[:id]).destroy
    render json: { message: "Comment deleted"}
  end

  private
    def comment_params
      params.require(:comment).permit(:subject, :body, :author, :item_id)
    end

    def set_item
      @item = Item.find(params[:item_id])
    end


end
