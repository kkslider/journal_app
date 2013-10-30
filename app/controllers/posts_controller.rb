class PostsController < ApplicationController
  respond_to :json
  
  def create
    @post = Post.new(params[:post])
    
    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => 422
    end
  end
  
  def index
    @posts = Post.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    
    @post.destroy
    render :json => "NICE! DESTROYED!", status: 200
    # if @post.destroy
  end
  
  def update
    @post = Post.find(params[:id])
    
    if @post.update_attributes(params[:post])
      # redirect_to posts_url
      render :json => @post
    else
      render :json => @post.errors, :status => 422
    end
  end
end


