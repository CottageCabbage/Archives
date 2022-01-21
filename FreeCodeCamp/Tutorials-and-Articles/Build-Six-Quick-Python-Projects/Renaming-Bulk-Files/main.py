import os

def main():
    i = 0

    z = ''
    path = input("\nDirectory Path:\n") 
    for filename in os.listdir(path):
        # Get filename, split it by spaces, but an dash in front of every word but the last
        x = filename.split()
        for word in x[:-1]:
            y = word + '-'
            z += y
        z += x[-1]
        # Get original filename
        my_source = path + filename
        # Fuse new filename with path, then replace original filename with new
        my_dest = path + z
        os.rename(my_source, my_dest)
        i+=1
            

if __name__ == '__main__':
    main()